/*
 *		This file contains the javascript code for our gallery
 */

 function show(template, data) {
 	var html = template(data);
 	$('#content').html(html);
 }

 $(document).ready(function(){
 	var source = $('#album-template').html();
 	var album_template = Handlebars.compile(source);
 	show(album_template, gallery);
 });