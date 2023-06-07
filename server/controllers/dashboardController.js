exports.dashboard = async(req, res) => {
    const locals = {
        title: "Dashboard",
        description: "free nodeJs Notes app"
    }

    res.render('dashboard/index',{
        locals,
        layout:'../views/layouts/dashboard'
    });

}
