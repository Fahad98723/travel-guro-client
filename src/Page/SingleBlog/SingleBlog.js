import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Toast } from "react-bootstrap";
import { useParams } from "react-router-dom";
import img from "../../Images/banner/img (3).jpg";
import Sidebar from "../Home/Sidebar/Sidebar";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import Rating from "react-rating";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import LikeButton from "./LikeButton";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Box, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const SingleBlog = () => {
  
  const { id } = useParams();
  const { user, isAdmin } = useAuth();
  const [blog, setBlog] = useState([]);
  const [comment, setComment] = useState("");
  const [updateComment, setUpdateComment] = useState("");
  const [commented, setCommented] = useState(0);
  const [deleteCommented, setDeleteCommented] = useState(0);
  const [allComments, setAllComments] = useState([]);
  const [showA, setShowA] = useState(false);
  const [count, setCount] = useState(0)
  const [allReadyLiked, setAllReadyLiked] = useState(false)
  const [edit, setEdit] = useState(false)
  const [rendering, setRendering] = useState(0)
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [commentId , setCommentId] = useState('')
  const handleClick = (event,id) => {
      setAnchorEl(event.currentTarget);
      setCommentId(id);
  };
  const handleClose = () => {
      setAnchorEl(null);

  };

  const toggleShowA = () => setShowA(!showA);


  console.log(allReadyLiked);
  console.log(count);
  const updateCommentHandle = (commentId) => {
    const data = {
      comment: updateComment,
      title: blog.title,
      author: blog.traveler,
      blogId: blog._id,
      commenter: user.displayName,
      image: user?.photoURL,
      email: user?.email,
    };
    axios
      .put(`https://stormy-sea-69201.herokuapp.com/blog/comments/${commentId}`, data)
      .then((res) => {
        if (res.data.matchedCount) {
          setShowA(false);
          setCommented(commented + 1);
          setEdit(false)
        }
      });
    console.log(commentId);
  };
  // const sBlog = blog.filter(b => b._id === id)
  // console.log(sBlog);

  const commentHandle = (e) => {
    if (comment) {
      const data = {
        comment: comment,
        title: blog.title,
        author: blog.traveler,
        blogId: blog._id,
        commenter: user.displayName,
        image: user?.photoURL,
        email: user?.email,
      };
      axios
        .post("https://stormy-sea-69201.herokuapp.com/blog/comments", data)
        .then((res) => {
          if (res.data.insertedId) {
            setCommented(commented + 1);
            e.target.reset();
          }
        });
    } else {
      return;
    }
    e.preventDefault();
    console.log(comment);
  };

  useEffect(() => {
    fetch("https://stormy-sea-69201.herokuapp.com/blog/comments")
      .then((res) => res.json())
      .then((data) => {
        setAllComments(data);
      });
  }, [commented, deleteCommented]);

  const blogComments = allComments?.filter((b) => b?.blogId === blog?._id);

  console.log(blogComments);

  const deleteComment = (id) => {
   console.log(id);
    axios
      .delete(`https://stormy-sea-69201.herokuapp.com/blog/comments/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          setDeleteCommented(deleteCommented + 1);
          handleClose()
        }
      });
  };
  // const userWithdraw = blog?.likers?.filter(l => l?.likerEmail !== user?.email)
  // console.log(userWithdraw, liker);
  

  // const likeMinus = () => {
  //   setLike(false)
  //   setLikeCount(likeCount - 1)
  //   const userWithdraw = blog?.likers?.filter(l => l?.likerEmail !== user?.email)
  //   setLiker(userWithdraw)
  // }
  // const likePlus = () => {
  //   setLike(true)
  //   setLikeCount(likeCount + 1)
  //   setLiker({likerEmail : user.email})
  //   setEffectRender(effectRender + 1)
  // }

  // useEffect(() => {
  //   if (effectRender) {
  //     if (like) {
  //       const likes = {
  //         likes : likeCount,
  //         likers : [liker, ...blog?.likers]
  //       }
  //       axios.put(`https://stormy-sea-69201.herokuapp.com/blog/likes/${id}`, likes)
  //     }
  //     else{
  //       const likes = {
  //         likes : likeCount,
  //         likers : [...liker]
  //       }
  //       axios.put(`https://stormy-sea-69201.herokuapp.com/blog/likes/${id}`, likes)
  //     }
  //   }
  // },[likeCount])
  useEffect(() => {
    fetch(`https://stormy-sea-69201.herokuapp.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data)
        setCount(data.likes)
      });
  }, [id, user?.email, rendering, blog.likers]);
  
console.log(rendering);
  useEffect(() => {
      const allReadyLiker = blog?.likers?.find(b => b?.likerEmail === user?.email)
      if (allReadyLiker?.likerEmail === user?.email) {
        setAllReadyLiked(true)
      }
      else{
        setAllReadyLiked(false)
      }

  },[user.email, blog.likers])


  const commentEditing = allComments.find(c => c._id === commentId)

  return (
    <div>
      <Navigation></Navigation>
      <Container className="py-5">
        <Row>
          <Col lg="8">
            <h1 className="mb-3">{blog?.title}</h1>
            <img
              src={blog?.image}
              style={{ height: "500px", width: "100%" }}
              className="img-fluid"
              alt=""
            />           
              <LikeButton blog={blog} id={id} countNumber={count} allReadyLiked={allReadyLiked} blogComments={blogComments} rendering={rendering} setRendering={setRendering}></LikeButton>
            <div className="details mt-3">
              <h4>{blog?.address}</h4>
              <h3>Author : {blog?.traveler}</h3>
              <p>{blog?.details}</p>

              <h5>Expense : ${blog?.cost}</h5>
              <h5>Category : {blog?.category}</h5>
              <h5>Date : {blog?.date}</h5>
              <h5>Spent : {blog?.spentDay} Days</h5>
              <h5>
                Ratings :{" "}
                <Rating
                  className="text-warning"
                  emptySymbol="fa fa-star-o "
                  fullSymbol="fa fa-star "
                  initialRating={blog?.rating}
                  readonly
                />
              </h5>
            </div>
            <div className="p-3 mt-5 shadow">
              {blogComments.slice(0, 5)?.map((b) => (
                <div className="comments my-2 w-100">
                  <div className="d-flex align-items-center text-dark">
                    <div>
                      <img
                        src={
                          b?.image
                            ? b?.image
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZrsHa4yTpOTalvfF-EnLhyxY59jKbMX8__sb2XJs5wW2fV_zDdEo0mJgGRTXlPbkR-Y&usqp=CAU"
                        }
                        style={{
                          borderRadius: "50%",
                          height: "60px",
                          width: "60px",
                        }}
                        className=" me-3"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 className="fw-bold" style={{ fontSize: "14px",  marginBottom:'5px' }}>
                        {b.commenter}
                      </h6>
                      <p style={{ fontSize: "14px", marginBottom:'0px' }}>{b.comment} {b.email === user?.email || isAdmin ? (
                        <>
                            <IconButton
                            size="large"
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={(e) => handleClick(e,b._id)}
                        >
                            <MoreVertIcon  />
                        </IconButton>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                            
                        >

                            <MenuItem onClick={() => deleteComment(commentId)}>Delete <i className="fas fa-trash text-danger ms-3"></i></MenuItem>
                            <MenuItem onClick={() => setEdit(true)}>Edit <i class="fas fa-edit text-success ms-3"></i></MenuItem>
                            <divider />
                            {/* <MenuItem onClick={() => deleteFromHistory(like._id)}>Remove From Liked Videos</MenuItem> */}

                        </Menu>
                        </>
                        // <p
                        //   onClick={() => deleteComment(b._id)}
                        //   className="fw-bold text-danger"
                        //   style={{ fontSize: "12px", cursor: "pointer" }}
                        // >
                        //   Delete
                        // </p>
                      ) : (
                        ""
                      )}</p>
                      
                      {/* <p
                        className="fw-bold text-primary"
                        style={{ fontSize: "14px", cursor: "pointer" }}
                        onClick={toggleShowA}
                      >
                        Edit
                      </p>
                      <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header></Toast.Header>
                        <Toast.Body>
                          <Form.Group
                            className="mb-1"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Control
                              as="textarea"
                              defaultValue={b.comment}
                              onChange={(e) => setUpdateComment(e.target.value)}
                              rows={2}
                              placeholder="Update Your Comment Here"
                              required
                            />
                          </Form.Group>
                          <button
                            onClick={() => updateCommentHandle(b._id)}
                            disabled={!user?.email}
                            className="btn sm btn-success btn-sm"
                            type="submit"
                          >
                            Update
                          </button>
                        </Toast.Body>
                      </Toast> */}
                    </div>
                  </div>
                </div>
              ))} {
                edit ? <>
                <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  defaultValue={commentEditing.comment}
                  onChange={(e) => setUpdateComment(e.target.value)}
                  rows={2}
                  placeholder="Update Your Comment Here"
                  required
                />
              </Form.Group>
              <button
                onClick={() => updateCommentHandle(commentEditing._id)}
                disabled={!user?.email}
                className="btn sm btn-success btn-sm"
                type="submit"
              >
                Update
              </button>
              <button
                // onClick={() => updateCommentHandle(b._id)}
                disabled={!user?.email}
                className="btn sm btn-danger btn-sm ms-2"
                onClick={() => setEdit(false)}
              >
                Cancel
              </button>
                </> : <Form className="mt-3" onSubmit={commentHandle}>
                {/* <Form.Label>Leave Your Comment Here</Form.Label> */}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    onChange={(e) => setComment(e.target.value)}
                    rows={3}
                    placeholder="Leave Your Comment Here"
                    required
                  />
                </Form.Group>
                <button
                  disabled={!user?.email}
                  className="btn btn-success"
                  type="submit"
                >
                  Comment
                </button>
              </Form>
              }
              
            </div>
          </Col>
          <Col lg="4">
            <div className="heading mb-3">
              <h2>Top Rated</h2>
            </div>
            <Sidebar></Sidebar>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default SingleBlog;
