from flask import Flask , redirect , url_for, jsonify, render_template, request, Response, flash, json

import os 

from flask_sqlalchemy import SQLAlchemy

import datetime

import random

from flask_marshmallow import Marshmallow


app = Flask(__name__ , static_folder='static' ,template_folder='templates')

app.config['SECRET_KEY'] = os.urandom(1000)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:duykhanh12345@localhost/NAILAPP'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Articles(db.Model):
    
    id = db.Column(db.Integer, primary_key = True )
    
    title = db.Column(db.String(100), nullable = False )
    
    body = db.Column(db.String(100), nullable = False )
    
    date = db.Column(db.DateTime, default = datetime.datetime.now)
    
    
    def __init__(self, title, body):
        
        self.title = title
        self.body = body 
   
        
class ArticleSchema(ma.Schema):
    class Meta:
        fields = ( 'id', 'title' , 'body' , 'date')
        

article_shema = ArticleSchema()   
articles_shema = ArticleSchema(many = True)     

@app.route('/' , methods = ['GET'])
def Home():
    
    return jsonify({'hello':'world'})



@app.route('/add_product' , methods = [ 'GET', 'POST'])
def add_product():
    
    if request.method == 'POST':
    
        title = request.form['title']
        
        body = request.form['body']
        
        item = Articles( title , body )
        
        db.session.add(item)
        
        db.session.commit()
        
        flash(f"Add Successful")
        
        return redirect(request.referrer)
    
    else:
    
        return render_template('add.html')
    
    
@app.route('/get_data' , methods = ['GET'])
def get():
    
    all_articles = Articles.query.all()
    
    results = articles_shema.dump(all_articles)
    
    return jsonify(results)


@app.route('/add' , methods = ['POST'] )
def add():
    
    title = request.json['title']
    
    body = request.json['body']
    
    articles = Articles( title , body )
    
    db.session.add(articles)
    
    db.session.commit()
    
    return article_shema.jsonify(articles)


@app.route('/delete/<id>/', methods = ['DELETE'])
def delete_data(id):
    
    item =  Articles.query.get(id)
    
    db.session.delete(item)
    
    db.session.commit()
    
    return article_shema.jsonify(item)
    



if __name__ == '__main__' :
    
    app.run( debug = True , port = 5000 )
    
    
    

