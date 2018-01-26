module.exports = function(app) {
	var CheckingController = {
		listChecking : function(request, response){
			var estabId = request.params.estabId;
			var sql = 'SELECT `id_checking`,`id_usuario_app`, `id_estabelecimento`, `datacadastro` FROM tb_checking WHERE dismist=0 AND id_estabelecimento = '+estabId;
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		saveChecking : function(request, response){
			var checking = request.body;
			var sql = 'INSERT INTO tb_checking(id_usuario_app, id_estabelecimento, datacadastro, dismist) VALUES ("'+checking.id_usuario_app+'","'+checking.id_estabelecimento+'","'+checking.datacadastro+'",0)';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		updateChecking : function(request,response){
			var checkId = request.params.checkId;
			var check = request.body;
			var sql = 'UPDATE `tb_checking` SET `id_usuario_app`="'+check.id_usuario_app+'", `id_estabelecimento`="'+check.id_estabelecimento+'", `datacadastro`="'+check.datacadastro+'" WHERE `id_checking` = "'+checkId+'"';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});	
		},
		deleteChecking : function(request,response){
			var checkId = request.params.checkId;
			var check = request.body;
			var sql = 'UPDATE `tb_checking` SET `dismist`= 1 WHERE `id_checking` = "'+checkId+'"';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});	
		}
	};
	return CheckingController;
}
