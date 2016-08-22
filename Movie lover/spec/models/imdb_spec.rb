#This file is used for testing the correspondant one in the app folder 
#(see the path, the spec_helper is like the captain of the boat, 
#it tells what each test is going to test)

require_relative '../../app/models/imdb.rb'

describe Searcher do 

	before(:each) do
  	@search = Searcher.new
	end

	it ".search(word) finds me all the film with that word" do
		expect(@search.search("die hard")).to eq(true)
	end

	it ".list_ten shows me the ten first elements of my film array" do 
		@search.search("die hard")
		expect(@search.list_ten).to eq(10)
	end

	it ".id_finder tells me the films id" do
		@search.search("die hard")
		@search.list_ten
		expect(@search.id_finder).to eq("0095016")
	end

	it ".poster_finder shows me the film poster" do
		@search.search("die hard")
		@search.list_ten
		@search.id_finder
		expect(@search.pic_array).to eq("http://ia.media-imdb.com/images/M/MV5BMTY4ODM0OTc2M15BMl5BanBnXkFtZTcwNzE0MTk3OA@@.jpg")
	end

	it ".right_year tells me if the year introduce is the correct one" do 
		@search.search("die hard")
		@search.list_ten
		@search.id_finder
		expect(@search.right_year).to eq(1988)
	end
end

