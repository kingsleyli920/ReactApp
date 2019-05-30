import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    ListGroup,
    ListGroupItem
} from "reactstrap";
class DishDetail extends Component {
    
    render() {
        const renderComments = comments => {
            if (comments != null) {
                return (
                    <div className="container">
                        <h4>Comments</h4>
                        <ListGroup>
                            {comments.comments.map(comment => {
                                return (
                                    <ListGroupItem key={comment.id}>
                                        <div>{comment.comment}</div>
                                        <div>
                                            --
                      {comment.author},{new Intl.DateTimeFormat('en-US',{year:'numeric', 'month':'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                                        </div>
                                    </ListGroupItem>
                                );
                            })}
                        </ListGroup>
                    </div>
                );
            } else {
                return <div />;
            }
        };
        const renderDish = dish => {
            if (dish != null) {
                return (
                    <div>
                        <Card>
                            <CardImg
                                top
                                src={this.props.selectedDish.image}
                                alt={this.props.selectedDish.name}
                            />
                            <CardBody>
                                <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                <CardText>{this.props.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                );
            } else {
                return <div />;
            }
        };
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">{renderDish(this.props.selectedDish)}</div>
                <div className="col-12 col-md-5 m-1">
                    {renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;