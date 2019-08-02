module.exports = (app) => {
    const products = require('../controllers/product.controller.js');

    // test //
    //app.get('/api', products.findAll);

    // Retrieve all Notes
    app.get('/api/produits/:products', products.findProducts);

    // Retrieve all Notes
    app.get('/api/produit/:productid', products.findProductid);


    // Retrieve all Notes
    app.get('/api/produits/:category/:subcategory', products.findSubcategory);


    app.get( "/api/recherche/:search", products.findSearch);

    // find all shops
    app.get('/api/admin/produits/categories', products.findAll);

    // create a shops
    app.post('/api/admin/produits/categories/create', products.create);

    // update a shops
    app.put('/api/admin/produits/:categories/update', products.update);

    // delete a shops
    app.delete('/api/admin/produits/:categories/delete', products.delete);

    // admin show a shops
    app.get('/api/admin/produits', products.findAll);

    // create a shops
    app.post('/api/admin/produits/create', products.create);

    // update a shops
    app.put('/api/admin/:produits/update', products.update);

    // delete a shops
    app.delete('/api/admin/:produits/delete', products.delete);

    // find product of a shop
    app.get('/api/commercant', products.findAll);

    // find product of a shop
    app.post('/api/commercant', products.findAll);

    // Affiche toutes les subcategories
    app.get('/api/categories/sous_categories', products.findAll);

    // Trouver un produit par ID
    app.get('/api/categories/:products', products.findProductscat);

    //
    app.get('/api/admin/produits/categories/:sous_categories', products.findSous_categories);

    //
    app.post('/api/admin/produits/categories/sous_categories/create', products.create);

    //
    app.put('/api/admin/produits/categories/:sous_categories/update', products.update);

    //
    app.post('/api/admin/produits/categories/:sous_categories/delete', products.delete);




    // Retrieve a single Note with noteId
   // app.get('/category/:categoryId', notes.findOne);

    // Update a Note with noteId
    //app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
   // app.delete('/notes/:noteId', notes.delete);
}