import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: String,
            required: true,
        }
},{
    timestamps: true
}
);

const Book = mongoose.model("Book", bookSchema);

export default Book;