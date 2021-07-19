// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
    public async index() {
        const posts = await Post.all()
        return posts.map((post) => post.toJSON())
    }

    public async show({ params }) {
        const post = await Post.find(params.id)
        if(post == null) {
            return {
                error: 'Post does not exist'
            }
        }
        return post.toJSON()
    }

    public async store({ request }) {
        const form_data = request.only(['title', 'body'])
        
        const post = await Post.create({
            title: form_data.title,
            body: form_data.body
        })

        return post.toJSON()
    }
}
