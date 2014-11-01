var preload_data = [
	{item: 'Papaya', done: 0},
	{item: 'Pears', done: 0},
	{item: 'Apples', done: 0}
];
migration.up = function(migrator) {
	migrator.createTable({
		"columns": {
			"item":"text",
			"done":"integer",
			"date_completed":"text"
		}
	});
	for (var i = 0; i < preload_data.length; i++) { 
	    migrator.insertRow(preload_data[i]);
    }
};

migration.down = function(migrator) {
	migrator.dropTable("shoplist");
};