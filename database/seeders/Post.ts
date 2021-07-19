import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'
export default class PostSeeder extends BaseSeeder {
  // 開発時(NODE_ENVがTdevelopmentになっているときのみ実行する)
  public static developmentOnly = true

  public async run () {
    // Write your database queries inside the run method
    await Post.createMany([
      {
        title: '初めての投稿',
        body: 'Hello Seeders!'
      },
      {
        title: '今日の日報',
        body: '今日はいろいろなことをしました。'
      }
    ])
  }
}
