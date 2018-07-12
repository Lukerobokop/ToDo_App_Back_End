class TodoController < ApplicationController
    def index
    end
    def show
         @todoname= "shopping"
         @todopomodoro=5
         @todo= ToDo.find_by_id (params[:id])
         todo_id=params[:id]
         if todo_id=="1"
             @todoname=="do homweork"
             @estimatedpomodoro= 45
             
        elsif todo_id=="2"
             @todoname="text grandma"
             @estimatedpomodoro= 15
             
        elsif todo_id=="3"
             @todoname="feed dog"
             @estimatedpomodoro= 5
             
        elsif todo_id=="4"
             @todoname="see teacher after school"
             @estimatedpomodoro= 30
         end
         # If on /todo/show/1, todo_name = do homework and todo_time = 45
         # If on /todo/show/2. to_name = text grandma and todo_time = 15
         # If on /todo/show/3. to_name = feed dog and todo_time = 5
    end
end