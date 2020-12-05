

function dyn(test){
BodyJS = [$("div#BodyImgText"),$('img#Img_body'),$('p#text_body')];
	try {
		var mysql = require('mysql');
		var con = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "",
			database: "mysql"
		});

		con.connect(function (err) {
			if (err) throw err;
			con.query("SELECT * FROM a_data_js ", function (err, result, fields) {
				if (err) throw err;
				BodyJS[0].text(result[test].nameOsnova);
				BodyJS[1].attr("src", result[test].ImgOsnova);
				BodyJS[2].text(result[test].TextOsnova);
			});
		});
	}
	catch (err) {
		BodyJS[0].text(nameOsnova[test]);
		BodyJS[1].attr("src", ImgOsnova[test]);
		BodyJS[2].text(TextOsnova [test]);
	}
}
