//本地预览/生产环境部署    需要配置这个文件     生产环境时修改路劲
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? './' : "/"
};


