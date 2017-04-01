class PostsController < ApplicationController
	def index
	end

	def all_posts
		@post = Post.all
		render json: @post
	end

	def create
		@post = Post.new(post_params)
		if @post.save
			render json: {
				post: @post,
				success: true
			}
		else
			render json: {
				success: false
			}
		end
	end

	def destroy
		@post = Post.find(params[:id])
		if @post.destroy
			render json: {
				success: true
			}
		else
			render json: {
				success: false
			}
		end
	end

	private

		def post_params
			params[:post].permit!
		end
end
