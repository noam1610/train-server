'use strict'
module.exports = function(Subsiders) {
    Subsiders.sharedClass.find('create', true).shared = true;
    Subsiders.sharedClass.find('update', true).shared = false;
    Subsiders.sharedClass.find('upsert', true).shared = false; 
    Subsiders.sharedClass.find('updateAttributes', false).shared = false;
    Subsiders.sharedClass.find('deleteById', true).shared = false;
    Subsiders.sharedClass.find('find', true).shared = false; 
    Subsiders.sharedClass.find('findById', true).shared = false; 
    Subsiders.sharedClass.find('count', true).shared = false; 
    Subsiders.sharedClass.find('exists', true).shared = false; 
    Subsiders.sharedClass.find('findOne', true).shared = false;
};
