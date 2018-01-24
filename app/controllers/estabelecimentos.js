module.exports = function(app){
	var EstabelecimentosController = {
		listEstabelecimentos : function(request,response){
			var sql = 'SELECT `id_estabelecimento`, `nome_estabelecimento`, `id_usuario_dono`, `telefone1`, `telefone2`, `telefone3`, `email`, `site`, `facebook`, `instagram`, `logradouro`, `numero`, `complemento`, `bairro`, `cep`, `id_cidade`, `id_estado` FROM `tb_estabelecimentos` WHERE dismist=0'; 
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		saveEstabelecimentos : function(request,response){
			var estab = request.body;
			var sql = 'INSERT INTO tb_estabelecimentos(nome_estabelecimento, id_usuario_dono, telefone1, telefone2, telefone3, email, site, facebook, instagram, logradouro, numero, complemento, bairro, cep, id_cidade, id_estado, dismist) VALUES ("'+estab.nome_estabelecimento+'","'+estab.id_usuario_dono+'","'+estab.telefone1+'","'+estab.telefone2+'","'+estab.telefone3+'","'+estab.email+'","'+estab.site+'","'+estab.facebook+'","'+estab.instagram+'","'+estab.logradouro+'","'+estab.numero+'","'+estab.complemento+'","'+estab.bairro+'","'+estab.cep+'","'+estab.id_cidade+'","'+estab.estado+'",0)';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		updateEstabelecimentos : function(request,response){
			var estabId = request.params.estabId;
			var estab = request.body;
			var sql = 'UPDATE `tb_estabelecimentos` SET `nome_estabelecimento`="'+estab.nome_estabelecimento+'",`id_usuario_dono`="'+estab.id_usuario_dono+'",`telefone1`="'+estab.telefone1+'",`telefone2`="'+estab.telefone2+'",`telefone3`="'+estab.telefone3+'",`email`="'+estab.email+'",`site`="'+estab.site+'",`facebook`="'+estab.facebook+'",`instagram`="'+estab.instagram+'",`logradouro`="'+estab.logradouro+'",`numero`="'+estab.numero+'",`complemento`="'+estab.complemento+'",`bairro`="'+estab.bairro+'",`cep`="'+estab.cep+'",`id_cidade`="'+estab.id_cidade+'",`id_estado`="'+estab.id_estado+'",`dismist`="'+estab.dismist+'" WHERE `id_estabelecimento` = "'+estabId+'"';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		deleteEstabelecimentos : function(request,response){
			var estabId = request.params.estabId;
			var estab = request.body;
			var sql = 'UPDATE `tb_estabelecimentos` SET `dismist`= 1 WHERE `id_estabelecimento` = "'+estabId+'"';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		}

	};
	return EstabelecimentosController;
}