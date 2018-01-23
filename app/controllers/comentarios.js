module.exports = function(app){
	var ComentariosController = {
		listComentarios : function(request,response){
			var sql = 'SELECT `id_usuario_app`, `horario`, `texto_comentario`, `tipo_comentario`, `id_referencia` FROM `tb_comentarios` WHERE dismist=0';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		saveComentarios : function(request,response){
			var user = request.body;
			var sql = 'INSERT INTO `tb_comentarios`(id_usuario_app, horario, texto_comentario, tipo_comentario, id_referencia, dismist) VALUES ("'+comentarios.id_usuario_app+'","'+comentarios.horario+'","'+comentarios.texto_comentario+'","'+comentarios.tipo_comentario+'","'+comentarios.tipo_id_referencia+'",0)';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		updateComentarios : function(request,response){
			
		},
		deleteComentarios : function(request,response){
			
		},
		login : function(request,response){
			
		}

	};
	return ComentariosController;
}