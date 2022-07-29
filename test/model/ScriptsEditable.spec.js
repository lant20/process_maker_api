/**
 * ProcessMaker API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@processmaker.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProcessMakerApi);
  }
}(this, function(expect, ProcessMakerApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ProcessMakerApi.ScriptsEditable();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ScriptsEditable', function() {
    it('should create an instance of ScriptsEditable', function() {
      // uncomment below and update the code to test ScriptsEditable
      //var instane = new ProcessMakerApi.ScriptsEditable();
      //expect(instance).to.be.a(ProcessMakerApi.ScriptsEditable);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new ProcessMakerApi.ScriptsEditable();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ProcessMakerApi.ScriptsEditable();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new ProcessMakerApi.ScriptsEditable();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new ProcessMakerApi.ScriptsEditable();
      //expect(instance).to.be();
    });

    it('should have the property timeout (base name: "timeout")', function() {
      // uncomment below and update the code to test the property timeout
      //var instance = new ProcessMakerApi.ScriptsEditable();
      //expect(instance).to.be();
    });

    it('should have the property runAsUserId (base name: "run_as_user_id")', function() {
      // uncomment below and update the code to test the property runAsUserId
      //var instance = new ProcessMakerApi.ScriptsEditable();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new ProcessMakerApi.ScriptsEditable();
      //expect(instance).to.be();
    });

    it('should have the property scriptCategoryId (base name: "script_category_id")', function() {
      // uncomment below and update the code to test the property scriptCategoryId
      //var instance = new ProcessMakerApi.ScriptsEditable();
      //expect(instance).to.be();
    });

  });

}));
