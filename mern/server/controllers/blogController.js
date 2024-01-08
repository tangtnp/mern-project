//ติดต่อกับฐานข้อมูล / ดำเนินการกับฐานข้อมูล
const slugify = require("slugify")
const Blogs = require("../models/blogs")
//บันทึกข้อมูล
exports.create=(req,res)=>{
    const {title,content,author} = req.body
    const slug = slugify(title)
    //validate
    switch(true){
        case !title:
            return res.status(400).json({error:"กรุณาป้อนชื่อข้อความ"})
            break;
        case !content:
            return res.status(400).json({error:"กรุณาป้อนเนื้อหาบทความ"})
            break;
    }
    //บันทึกข้อมูล
    Blogs.create({title,content,author,slug},(err,blog)=>{
        if(err){
            res.status(400).json({error:"มีบทความนี้ชื่อซ้ำกัน"})
        }
        res.json(blog)
    })
}

//localhost:8080/install-postman