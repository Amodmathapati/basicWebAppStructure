
exports.homepage = async(req, res) => {
    const locals = {
        title: "Nodejs notes",
        description: "free nodeJs Notes app"
    }

    res.render('index',{
        locals,
        layout:'../views/layouts/frontpage'
    });

}

exports.about = async(req, res) => {
    const locals = {
        title: "about:Nodejs notes",
        description: "free nodeJs Notes app"
    }

    res.render('about',locals);
    
}

exports.FAQ = async(req, res) => {
    const locals = {
        title: "FAQ:Nodejs notes",
        description: "free nodeJs Notes app"
    }

    res.render('FAQ',locals);
    
}