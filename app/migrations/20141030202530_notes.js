var preload_data = [
	{title: 'My First Note', location: 'Ala Moana', note: 'Great Papaya'},
	{title: 'My Second Note', location: 'KCC', note: 'Best Manogs at back store'}
];

migration.up = function(migrator) {
	migrator.createTable({
		"columns": {
			"title":"text",
			"location":"text",
			"note":"text"
		}
	});
	for (var i = 0; i < preload_data.length; i++) { 
	    migrator.insertRow(preload_data[i]);
    }
};

migration.down = function(migrator) {
	migrator.dropTable("notes");
};