"""Models for Cupcake app."""
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    """Connect to DB"""
    db.app = app
    db.init_app(app)
    app.app_context().push()
    

class Cupcake(db.Model):
    """Cupcake Model"""
    
    __tablename__ = "cupcakes"
    
    default = 'https://tinyurl.com/demo-cupcake'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    flavor = db.Column(db.Text, nullable=False)
    size = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Float, nullable=False)
    image = db.Column(db.Text, nullable=False, server_default=default, default=default)
    
    def serialize(self):
        """Returns a dict representation of cupcake which we can turn into JSON"""
        return {
            "id": self.id,
            "flavor": self.flavor,
            "size": self.size,
            "rating": self.rating,
            "image": self.image
        }
        
    def __repr__(self):
        return f"<Cupcake {self.id} flavor={self.flavor} size={self.size} rating={self.rating} image={self.image}"
    