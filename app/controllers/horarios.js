module.exports = function(app){
	var HorariosController = {
		listHorarios : function(request,response){
			var sql = 'SELECT `id_horario`,`id_estabelecimento`, `dia_inicio`, `dia_final`, `hora_inicio`, `hora_final` FROM `tb_horarios` WHERE dismist = 0'; 
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		saveHorarios : function(request,response){
			var horario = request.body;
			var sql = 'INSERT INTO tb_horarios(id_estabelecimento, dia_inicio, dia_final, hora_inicio, hora_final, dismist) VALUES ("'+horario.id_estabelecimento+'", "'+horario.dia_inicio+'", "'+horario.dia_final+'", "'+horario.hora_inicio+'", "'+horario.hora_final+'",0)';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		updateHorarios : function(request,response){
			var horarioId = request.params.horarioId;
			var horario = request.body;
			var sql = 'UPDATE `tb_horarios` SET `id_estabelecimento`="'+horario.id_estabelecimento+'" , `dia_inicio`="'+horario.dia_inicio+'", `dia_final`="'+horario.dia_final+'", `hora_inicio`="'+horario.hora_inicio+'", `hora_final`="'+horario.hora_final+'" WHERE `id_horario` = "'+horarioId+'"';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		deleteHorarios : function(request,response){
			var horarioId = request.params.horarioId;
			var sql = 'UPDATE `tb_horarios` SET `dismist`= 1 WHERE `id_horario` = "'+horarioId+'"';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		}

	};
	return HorariosController;
}