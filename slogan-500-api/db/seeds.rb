# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Jason")
User.create(username: "Mitch")
User.create(username: "Hemesh")
User.create(username: "Edwin")
User.create(username: "Vanessa")
User.create(username: "Andy")
User.create(username: "Ana")
User.create(username: "Cody")
User.create(username: "AJ")

Score.create(total_points: 8, user_id: 2)
Score.create(total_points: 10, user_id: 1)
Score.create(total_points: 12, user_id: 3)
Score.create(total_points: 6, user_id: 7)
Score.create(total_points: 5, user_id: 8)
Score.create(total_points: 13, user_id: 3)
Score.create(total_points: 10, user_id: 4)
Score.create(total_points: 8, user_id: 5)
Score.create(total_points: 15, user_id: 4)

Company.create(name: "Coca-Cola",slogan: "Its the Real Thing")
Company.create(name:"Adidas",slogan: "Impossible is Nothing")
Company.create(name:"American Airlines",slogan: "Something in Special the Air")
Company.create(name:"American Express",slogan: "Don't Leave Home Without It")
Company.create(name:"Apple",slogan: "Think Different")
Company.create(name:"Avon",slogan: "The Company For Women")
Company.create(name:"BMW",slogan: "The Ultimate Driving Machine")
Company.create(name:"Budweiser",slogan: "The King of Beers")
Company.create(name:"Burger King",slogan: "Have it your Way")
Company.create(name:"Canon",slogan: "Delighting You Always")
Company.create(name:"Cisco",slogan:"Welcome to the Human Network")
Company.create(name:"CitiBank",slogan: "the Citi never Sleeps")
Company.create(name:"Real California Milk",slogan: "Got Milk?")
Company.create(name:"CNN",slogan: "Be the First to know")
Company.create(name:"Ebay",slogan: "Buy it, Sell it, Love it")
Company.create(name:"Fedex",slogan: "When there is no Tomorrow")
Company.create(name:"Ford",slogan: "Go Further")
Company.create(name:"Fortune",slogan: "For the Men in Charge of Change")
Company.create(name:"Gillette",slogan: "The Best a Man can get")
Company.create(name:"Google",slogan: "Don't be Evil")
Company.create(name:"Goldfish",slogan: "The Snack that smiles back")
Company.create(name:"Harley-Davidson ",slogan: "American by birth, Rebel by choice.")
Company.create(name:"Hewlett Packard",slogan: "Invent")
Company.create(name:"Honda",slogan: "The Power of Dreams")
Company.create(name:"IBM",slogan: "Solutions for a small Planet")
Company.create(name:"IMAX",slogan: "Think Big")
Company.create(name:"Jaguar",slogan: "The Art of Performance")
Company.create(name:"Johnnie Walker",slogan: "Keep walking")
Company.create(name:"Nike",slogan: "Just Do It")
Company.create(name:"Tesla",slogan: "Sustainable Energy")
Company.create(name:"KFC",slogan: "It's Finger Lickin Good")
Company.create(name:"Kit Kat",slogan: "Have a break. Have a Kit Kat")
Company.create(name:"Lays",slogan: "Betcha can't eat just one")
Company.create(name:"Levis",slogan: "Quality never goes out of style")
Company.create(name:"LG",slogan: "Life's Good")
Company.create(name:"M&M",slogan: "Melts in your mouth, not in your hands.")
Company.create(name:"Microsoft",slogan: "Where do you Want to go Today")
Company.create(name:"Motorola",slogan: "Hello Moto")
Company.create(name:"The New York Times",slogan: "All the News thats fit to Print")
Company.create(name:"Oracle",slogan: "Information Driven")
Company.create(name:"Panasonic",slogan: "Ideas for Life")
Company.create(name:"Pepsi",slogan: "The Choice of a new Generation")
Company.create(name:"Playstation",slogan: "Live in your World. Play in ours")
Company.create(name:"Porsche",slogan: "There is no substitue")
Company.create(name:"Reebok",slogan: "I am what I am")
Company.create(name:"Sprite",slogan: "Obey your Thirst")
Company.create(name:"Volkswagen",slogan: "Das Auto")
