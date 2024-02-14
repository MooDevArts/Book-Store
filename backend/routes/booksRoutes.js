import express from 'express';
import Book from  '../models/book.js';
const router = express.Router();

//Book - save new
    router.get('/', async (req, res) => {
    const newBook = {
        name: "fsadfasdf",
        author: "sgsdfg",
        publishYear: 1999
    };
    try {
        const savedBook = await Book.create(newBook);
        return res.status(201).send(savedBook);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to save book' });
    }
    });
    
    //Book - get all
    router.get('/all', async(req, res) => {
        try{
            const allBooks = await Book.find({});
            return res.status(200).send({
                count: allBooks.length,
                data: allBooks
            });
        }catch(err){
            console.log(err);
        }
    });
    
    //Book - get by name
    router.get('/find/:name', async(req, res) => {
        try{
            const allBooks = await Book.find({name: req.params.name});
            if (allBooks.length === 0) {
                return res.status(404).json({ message: 'Book not found' });
            }
            return res.status(200).send({
                count: allBooks.length,
                data: allBooks
            });
        }catch(err){
            console.log(err);
        }
    });
    
    //Book - Update
    router.get('/update/:id', async(req, res) => {
        try{
            const {id} = req.params;
            const result = await Book.findByIdAndUpdate(id, req.body);
            if(!result){
                return res.status(404).json({message: 'Booko not found'});
            }
            return res.status(200).send({message: "book updated successfully"})
        }catch(err){
            console.log(err);
            res.status(500).send({message: err.message})
        }
    })
    
    //Book - Delete by id
    router.get('/delete/:id', async (req, res) => {
        try {
            const {id} = req.params;
            const result = await Book.findByIdAndDelete(id);
            if(!result){
                return res.status(404).json({message: 'book not found'})
            }else{
                return res.status(200).send({message: "Deleted"})
            }
    
        }catch(err){
            console.log(err.message);
            res.status(500).send({message: err.message});
        }
    });

    export default router;