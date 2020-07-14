console.log("🅱️ SCRIPT STARTED 🅱️");
try {
	(function overwrite(link) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', link.href);
			xhr.onload = () => {
				var html = xhr.responseText;
				// HK, US
				html = html.replace('class="hub-main" style="display: none;"');
				html += "<style>#graphics-paywall-overlay{position: static!important;}</style>";
				html += "<style>html {overflow:initial!important;}";
				
				document.open();
				document.write(html);
				document.close();
				
//document.body.innerHTML = html;

			};
			xhr.send();
			
			
		//}
	})(location);
} catch (ex) {
	console.log("Error: " + ex.message);
}
console.log("🅱️ SCRIPT ENDED 🅱️");