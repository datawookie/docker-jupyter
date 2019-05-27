define([
    'base/js/namespace',
    'base/js/events'
    ],
    function(IPython, events) {
        events.on("notebook_loaded.Notebook",
        	function () {
			// Set interval of autosave (in milliseconds).
  			IPython.notebook.set_autosave_interval(180000);
			}
  		);
    }
);
