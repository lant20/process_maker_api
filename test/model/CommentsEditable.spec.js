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
    instance = new ProcessMakerApi.CommentsEditable();
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

  describe('CommentsEditable', function() {
    it('should create an instance of CommentsEditable', function() {
      // uncomment below and update the code to test CommentsEditable
      //var instane = new ProcessMakerApi.CommentsEditable();
      //expect(instance).to.be.a(ProcessMakerApi.CommentsEditable);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ProcessMakerApi.CommentsEditable();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new ProcessMakerApi.CommentsEditable();
      //expect(instance).to.be();
    });

    it('should have the property commentableId (base name: "commentable_id")', function() {
      // uncomment below and update the code to test the property commentableId
      //var instance = new ProcessMakerApi.CommentsEditable();
      //expect(instance).to.be();
    });

    it('should have the property commentableType (base name: "commentable_type")', function() {
      // uncomment below and update the code to test the property commentableType
      //var instance = new ProcessMakerApi.CommentsEditable();
      //expect(instance).to.be();
    });

    it('should have the property up (base name: "up")', function() {
      // uncomment below and update the code to test the property up
      //var instance = new ProcessMakerApi.CommentsEditable();
      //expect(instance).to.be();
    });

    it('should have the property down (base name: "down")', function() {
      // uncomment below and update the code to test the property down
      //var instance = new ProcessMakerApi.CommentsEditable();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new ProcessMakerApi.CommentsEditable();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new ProcessMakerApi.CommentsEditable();
      //expect(instance).to.be();
    });

    it('should have the property hidden (base name: "hidden")', function() {
      // uncomment below and update the code to test the property hidden
      //var instance = new ProcessMakerApi.CommentsEditable();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ProcessMakerApi.CommentsEditable();
      //expect(instance).to.be();
    });

  });

}));
