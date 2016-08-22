
class Rock
	def initialize
	end
	def allowed(movements)
		puts "Your Rock has made the following movements"
		movements.outside_limits && movements.rock_type_movement
	end
end

class Bishop
	def initialize
	end
	def allowed(movements)
		puts "Your Bishop has made the following movements"
		movements.outside_limits && movements.bishop_type_movement
	end
end

class Queen 
	def initialize
	end
	def allowed(movements)
		puts "Your queen has made the following movements"
		movements.outside_limits && movements.queen_type_movement
	end
end

class King 
	def initialize
	end
	def allowed(movements)
		puts "Your King has made the following movements"
		movements.outside_limits && movements.king_type_movement
	end
end

class Horse
	def initialize
	end
	def allowed(movements)
		puts "Your Horse has made the following movements"
		movements.outside_limits && movements.horse_type_movement
	end
end

class Pawn
	def initialize
	end
	def allowed(movements)
		puts "Your Pawn has made the following movements"
		movements.outside_limits && movements.pawn_type_movement
	end
end



class Movements
	attr_reader :array_of_movements
	def initialize(array_of_movements)
		@array_of_movements = array_of_movements
	end
	def add_movement(from, to)
		@array_of_movements << {:origin => from, :end => to}
	end
	def outside_limits
		@array_of_movements.each do |movement|
			if movement[:origin][0] >= "i" || movement[:end][0] >= "i" || movement[:origin][1] >= "9" || movement[:end][1] >= "9"
				puts "You're playing on others person board"
				exit
			else
				 ""
			end
		end
	end
	def bishop_type_movement
		@array_of_movements.each do |movement|
			if	(movement[:origin][0].ord - movement[:end][0].ord).abs == (movement[:origin][1].ord - movement[:end][1].ord).abs
				puts "#{movement[:origin]} to #{movement[:end]} is LEGAL"
			else
				puts "#{movement[:origin]} to #{movement[:end]} is ILLEGAL"
			end
		end
	end
	def rock_type_movement
		@array_of_movements.each do |movement|
			if	movement[:origin][0].ord == movement[:end][0].ord || movement[:origin][1].ord == movement[:end][1].ord
				puts "#{movement[:origin]} to #{movement[:end]} is LLEGAL"
			else
				puts "#{movement[:origin]} to #{movement[:end]} is ILLEGAL"
			end
		end
	end
	def queen_type_movement
		@array_of_movements.each do |movement|
			if	movement[:origin][0].ord == movement[:end][0].ord || movement[:origin][1].ord == movement[:end][1].ord
				puts "#{movement[:origin]} to #{movement[:end]} is LLEGAL"		 
			elsif (movement[:origin][0].ord - movement[:end][0].ord).abs == (movement[:origin][1].ord - movement[:end][1].ord).abs
				puts "#{movement[:origin]} to #{movement[:end]} is LLEGAL"	
			else
				puts "#{movement[:origin]} to #{movement[:end]} is LILLEGAL"
			end
		end
	end
	def king_type_movement
		@array_of_movements.each do |movement|
			if (movement[:origin][0].ord - movement[:end][0].ord).abs <= 1 && (movement[:origin][1].ord - movement[:end][1].ord).abs <= 1
				puts "#{movement[:origin]} to #{movement[:end]} is LLEGAL"
			else
				puts "#{movement[:origin]} to #{movement[:end]} is LILLEGAL"
			end
		end
	end
	def horse_type_movement	
		@array_of_movements.each do |movement|
			if	(movement[:origin][0].ord - movement[:end][0].ord).abs == 2  && (movement[:origin][1].ord - movement[:end][1].ord).abs == 1
				puts "#{movement[:origin]} to #{movement[:end]} is LLEGAL"
			elsif (movement[:origin][0].ord - movement[:end][0].ord).abs == 1  && (movement[:origin][1].ord - movement[:end][1].ord).abs == 2
				puts "#{movement[:origin]} to #{movement[:end]} is LLEGAL"
			else
				puts "#{movement[:origin]} to #{movement[:end]} is LILLEGAL"
			end
		end
	end
	def pawn_type_movement
		@array_of_movements.each do |movement|
			if movement[:origin][1].ord == "2".ord && (movement[:end][1].ord - movement[:origin][1].ord) <= 2 && (movement[:end][1].ord - movement[:origin][1].ord) >= 0 && (movement[:end][0].ord - movement[:origin][0].ord) == 0 
				puts "#{movement[:origin]} to #{movement[:end]} is LLEGAL"
			elsif (movement[:end][1].ord - movement[:origin][1].ord) <= 1 && (movement[:end][1].ord - movement[:origin][1].ord) >= 0 && (movement[:end][0].ord - movement[:origin][0].ord) == 0 		
				puts "#{movement[:origin]} to #{movement[:end]} is LLEGAL"
			else
				puts "#{movement[:origin]} to #{movement[:end]} is LILLEGAL"
			end
		end
	end
end


wR = Rock.new
bR = Rock.new
wB = Bishop.new
bB = Bishop.new
wQ = Queen.new
bQ = Queen.new
wK = King.new
bk = King.new
wH = Horse.new
bH = Horse.new
wP = Pawn.new
bP = Pawn.new

simple_movements = Movements.new([ 
{:origin => "a2", :end => "a3"},
{:origin => "a2", :end => "a4"},
{:origin => "a2", :end => "a5"},
{:origin => "a7", :end => "a6"},
{:origin => "a7", :end => "a5"},
{:origin => "a7", :end => "a4"},
{:origin => "a7", :end => "b6"},
{:origin => "b8", :end => "a6"},
{:origin => "b8", :end => "c6"},
{:origin => "b8", :end => "d7"},
{:origin => "e2", :end => "e3"},
{:origin => "e3", :end => "e2"},
])

wR.allowed(simple_movements)
bR.allowed(simple_movements)
wB.allowed(simple_movements) 
bB.allowed(simple_movements) 
wQ.allowed(simple_movements) 
bQ.allowed(simple_movements) 
wK.allowed(simple_movements) 
bk.allowed(simple_movements) 
wH.allowed(simple_movements) 
bH.allowed(simple_movements) 
wP.allowed(simple_movements) 
bP.allowed(simple_movements) 

simple_movements.add_movement("a2", "a4")

bP.allowed(simple_movements) 


#lo que hay abajo es un viejo codigo transformado y pasado a la clase de Movements
		# if movements[number_of_movement][:origin][0] == movements[number_of_movement][:end][0] || movements[number_of_movement][:origin][1] == movements[number_of_movement][:end][1]
		# 	"LEGAL"
		# else
		# 	"ILLEGAL"
		# end
