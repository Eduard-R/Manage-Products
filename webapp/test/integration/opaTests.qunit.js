/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"opensap/manageproducts/manageproducts/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});