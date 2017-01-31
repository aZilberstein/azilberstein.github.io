var translator = {
	key : 'trnsl.1.1.20161021T212950Z.313539bce95ec859.c3fedd84d27e0538bcbcaec658006b53c70de256',
	translateApi : 'https://translate.yandex.net/api/v1.5/tr.json/translate',
	translate : function () {
		var text = $('#input').val();
		var userInputLang = $('#inputLangSelect').val();
		var userOutputLang = $('#outputLangSelect').val();
		var translateAjaxUrl = translator.translateApi + '?';
		translateAjaxUrl+= 'key=' + translator.key;
		translateAjaxUrl+= '&text=' + text;
		translateAjaxUrl+= '&lang=' + userInputLang + '-' + userOutputLang;

		var translateAjax = $.post(translateAjaxUrl, function() { 
 			if (translateAjax.readyState == 4) {
  				if (translateAjax.status == 200) {
  					var outputText = JSON.parse(translateAjax.responseText).text[0];
  					$('#output').val(outputText);
 				}
 			} 
 			else {
    			console.log(translateAjax.status + ':' + translateAjax.statusText);
  			}
  		});
	}
}

var wrapper = {
	languages : '',
	getLangApi: 'https://translate.yandex.net/api/v1.5/tr.json/getLangs',
	getLang : function (){
		var getLangAjaxUrl = wrapper.getLangApi + '?';
		getLangAjaxUrl+='ui=' + 'ru';
		getLangAjaxUrl+='&key=' + translator.key;

		var getLangList =  $.get(getLangAjaxUrl, function() { 
 			if (getLangList.readyState == 4) {
  				if (getLangList.status == 200) {
  					var langList = JSON.parse(getLangList.responseText);
  					wrapper.languages = langList.langs;
  					console.log(wrapper.languages);
  					wrapper.inputLangSelect(); 
  					wrapper.outputLangSelect();
 				}
 			} 
 			else {
    			console.log(getLang.status + ':' + getLang.statusText);
  			}
		});
	},
	inputLangSelect : function(){
		var translatorWrapper = $('<div></div>').attr({'class' : 'translatorWrapper'});
		var inputWrapper = $('<div></div>').attr({'class' : 'inputWrapper'});
		var input = $('<textarea></textarea>').attr({'id' : 'input', 
						'placeholder' : 'Введите ваш текст', 'class' : 'userInput'});
		inputWrapper.append(input);
		translatorWrapper.append(inputWrapper);
		$('body').prepend(translatorWrapper);
		var select = $('<select></select>').attr({'name' : 'Input Language', 
						'id' : 'inputLangSelect', 'class' : 'langSelect'});
		input.before(select);
			for(prop in wrapper.languages){
				var option = $('<option>'+ wrapper.languages[prop] + '</option>')
							.attr({'value': prop, 'class' : 'langInputs'});
				if (prop == 'en') {
					option.attr({'selected' : true})
				}
				select.append(option);
			}
		input.on('change', detectLang);

		var translateButton = $('<button>' + 'перевести' + '</button>').attr({'class' : 'translateButton'});
		translateButton.on('click', translator.translate);
		inputWrapper.after(translateButton);

	},
	outputLangSelect : function(){
		var outputWrapper = $('<div></div>').attr({'class' : 'inputWrapper'});
		var output = $('<textarea></textarea>').attr({'id' : 'output', 
						'placeholder' : 'Перевод вашего текста', 'class' : 'userInput'});
		outputWrapper.append(output);
		$('.translatorWrapper').append(outputWrapper);
		var select = $('<select></select>').attr({'name' : 'Output Language', 
						'id' : 'outputLangSelect', 'class' : 'langSelect'});
		output.before(select);
			for(prop in wrapper.languages){
				var option = $('<option>'+ wrapper.languages[prop] + '</option>')
							.attr({'value': prop, 'class' : 'langInputs'});
				if (prop == 'ru') {
					option.attr({'selected' : true})
				}
				select.append(option);
			}
		}
};

wrapper.getLang();

var detectLang = function(){
	var input = $('#input');
	var detectUrl = 'https://translate.yandex.net/api/v1.5/tr.json/detect?';
	detectUrl+= 'key=' + translator.key;
	detectUrl+= '&text=' + input.val();
		var detectLangAjax = $.post(detectUrl, function(){
		if (detectLangAjax.readyState == 4) {
  			if (detectLangAjax.status == 200) {
  					var inputLang = JSON.parse(detectLangAjax.responseText).lang;
  				$("[value='" + inputLang + "']:first").attr({'selected' : true});
 			}
 		} 
 		else {
    		console.log(detectLangAjax.status + ':' + detectLangAjax.statusText);
  		}
	});
};