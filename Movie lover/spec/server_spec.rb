#I use this file to check the server of my project. 
#I want to know the status code that my server gives me 

require_relative'../server.rb'
require 'rack/test'
require 'rspec'


describe 'Movie Lover' do
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  it "has a homepage that works" do
    get("/")
    expect(last_response).to be_ok
  end

  it "home page has a form" do
    get("/")
    expect(last_response.body).to include("form")
  end

  it "redirects when the user introduces the string" do
    post("/film_pictures", params: {word: "good"})
    expect(last_response.redirect).to be_true
  end
end



