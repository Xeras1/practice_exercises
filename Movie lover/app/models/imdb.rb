#here simply goes the ruby classes and methods you want to create
#Here you have an example of the IronTwit exercise made in week 2
require 'imdb'

class Searcher
	attr_reader :array_of_films, :array_of_ten, :id_array, :pic_array, :year_array
	def initialize
		@array_of_films = []
		@array_of_ten = []
		@id_array = []
		@pic_array = []
		@year_array = []
	end
	def search(str)
		@array_of_films = Imdb::Search.new(str).movies
		@array_of_films.any?
	end
	def list_ten
		@array_of_ten = @array_of_films[0..9]
		@array_of_ten.size
	end

	def id_finder
		@id_array = @array_of_ten.map do |movie|
			movie.id 
		end
		@id_array[0]
	end

	def pic_finder
		@pic_array = @id_array.map do |pic|
			Imdb::Movie.new(pic).poster
		end
		@pic_array[0]
	end

	def right_year
		@year_array = @id_array.map do |id|
			Imdb::Movie.new(id).year 
		end
		@year_array[0] 
	end
end

test = Searcher.new
test.search("die hard")
test.list_ten
test.id_finder
test.pic_finder
test.right_year
puts test.id_array
puts test.pic_array
 



