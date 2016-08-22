#Here we set the controler, i think.
#we set the path of hour website and decide what to do with the info taken from user
#also says how to employ the views. 


require 'sinatra'
require "sinatra/reloader" if development? # gem install sinatra-contrib
require_relative 'app/models/imdb.rb'
require 'pry'

get "/" do 
	erb(:homepage)
end

post "/film_pictures" do 
	
	@word = params[:word]

	test = Searcher.new
	test.search(@word)
	test.list_ten	
	test.id_finder
	test.pic_finder
	test.right_year

	@id_array = test.id_array
	@pic_array = test.pic_array
	@year_array = test.year_array
erb(:pictures)
end



