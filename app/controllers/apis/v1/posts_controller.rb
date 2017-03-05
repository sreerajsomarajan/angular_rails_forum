module Apis
  module V1
    #
    # PostsController for user related actions
    #
    # @author [DevSree]
    #
    class PostsController < BaseApiController
      # acts_as_token_authentication_handler_for User, except: [:index, :create]
      # Method to render posts
      def index
        render json: MainPost.all.order(created_at: :desc)
      end

      # Method to create a post.
      def create
        post = MainPost.new(post_params)
        msg = if post.save
                'Post has successfully created.'
              else
                set_error(:unprocessable_entity, post)
              end
        common_response(msg, post: post)
      end

      def show
        msg = if @post
                record = @post.post_json
                'Details of a post.'
              else
                set_error(:no_content)
                'Record not found'
              end
        common_response(msg, post: record)
      end

      private

      # Method to set post params.
      def post_params
        params.require(:post)
              .permit(:title, :description)
      end

      # Method to set patient.
      def set_post
        @post = MainPost.find(params[:id])
      end
    end
  end
end
