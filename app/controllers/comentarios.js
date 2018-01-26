module.exports = function(app){
	var ComentariosController = {
		listComentarios : function(request,response){
			var typeComment = request.params.typeComment;
			var idRef = request.params.idRef;
			var sql = 'SELECT `id_comentario`, `id_usuario_app`, `horario`, `texto_comentario`, `tipo_comentario`, `id_referencia` FROM `tb_comentarios` WHERE dismist=0 AND tipo_comentario = '+typeComment+' AND id_referencia = '+idRef;
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		saveComentarios : function(request,response){
			var comentarios = request.body;
			var sql = 'INSERT INTO `tb_comentarios`(id_usuario_app, horario, texto_comentario, tipo_comentario, id_referencia, dismist) VALUES ("'+comentarios.id_usuario_app+'","'+comentarios.horario+'","'+comentarios.texto_comentario+'","'+comentarios.tipo_comentario+'","'+comentarios.id_referencia+'",0)';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		updateComentarios : function(request,response){
			var typeComment = request.params.typeComment;
			var idRef = request.params.idRef;
			var idComment = request.params.idComment;
			var comment = request.body;
			var sql = 'UPDATE `tb_comentarios` SET `id_usuario_app`="'+comment.id_usuario_app+'",`horario`="'+comment.horario+'",`texto_comentario`="'+comment.texto_comentario+'",`tipo_comentario`="'+comment.tipo_comentario+'",`id_referencia`="'+comment.id_referencia+'" WHERE `tipo_comentario` = "'+typeComment+'" AND `id_comentario` = "'+idComment+'" AND id_referencia = '+idRef;
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});	
		},
		deleteComentarios : function(request,response){
			var typeComment = request.params.typeComment;
			var idRef = request.params.idRef;
			var idComment = request.params.idComment;
			var comment = request.body;
			var sql = 'UPDATE `tb_comentarios` SET `dismist`= 1 WHERE `tipo_comentario` = "'+typeComment+'" AND `id_comentario` = "'+idComment+'" AND id_referencia = '+idRef;
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		}

	};
	return ComentariosController;
}