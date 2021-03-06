/**
 * 
 * Package main ORY Keto
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'))
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {}
    }
    root.SwaggerJsClient.AuthenticationOAuth2ClientCredentialsSession = factory(
      root.SwaggerJsClient.ApiClient
    )
  }
})(this, function(ApiClient) {
  'use strict'

  /**
   * The AuthenticationOAuth2ClientCredentialsSession model module.
   * @module model/AuthenticationOAuth2ClientCredentialsSession
   * @version Latest
   */

  /**
   * Constructs a new <code>AuthenticationOAuth2ClientCredentialsSession</code>.
   * @alias module:model/AuthenticationOAuth2ClientCredentialsSession
   * @class
   */
  var exports = function() {
    var _this = this
  }

  /**
   * Constructs a <code>AuthenticationOAuth2ClientCredentialsSession</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthenticationOAuth2ClientCredentialsSession} obj Optional instance to populate.
   * @return {module:model/AuthenticationOAuth2ClientCredentialsSession} The populated <code>AuthenticationOAuth2ClientCredentialsSession</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()

      if (data.hasOwnProperty('allowed')) {
        obj['allowed'] = ApiClient.convertToType(data['allowed'], 'Boolean')
      }
      if (data.hasOwnProperty('sub')) {
        obj['sub'] = ApiClient.convertToType(data['sub'], 'String')
      }
    }
    return obj
  }

  /**
   * Allowed is true if the request is allowed and false otherwise.
   * @member {Boolean} allowed
   */
  exports.prototype['allowed'] = undefined
  /**
   * Subject is the identity that authorized issuing the token, for example a user or an OAuth2 app. This is usually a uuid but you can choose a urn or some other id too.
   * @member {String} sub
   */
  exports.prototype['sub'] = undefined

  return exports
})
