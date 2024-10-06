import { getPapers } from "./api/papers";
import { Card, CardContent, Typography, Avatar, Grid2 } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Testimonial from "../components/Testimonial";

import styles from "../styles/PapersPage.module.css";

const RoundedCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  padding: theme.spacing(2),
  maxWidth: 500,
  margin: "20px auto",
}));

const PapersPage = () => {
  const reviewers = [
    {
      name: "John Doe",
      role: "Software Engineer",
      image: "https://via.placeholder.com/56", // Replace with actual image URL
      testimonial:
        "This platform is absolutely fantastic! It has helped me streamline my workflow like never before.",
    },
    {
      name: "Jane Smith",
      role: "Product Manager",
      image: "https://via.placeholder.com/56", // Replace with actual image URL
      testimonial:
        "The features provided by this tool have drastically improved our team’s productivity.",
    },
    {
      name: "David Wilson",
      role: "Designer",
      image: "https://via.placeholder.com/56", // Replace with actual image URL
      testimonial:
        "As a designer, I love the flexibility and ease of use. It's perfect for our needs.",
    },
    {
      name: "David Wilson",
      role: "Designer",
      image: "https://via.placeholder.com/56", // Replace with actual image URL
      testimonial:
        "As a designer, I love the flexibility and ease of use. It's perfect for our needs.",
    },
  ];
  return (
    <>
      {/* <Grid2 container spacing={3} justifyContent="space-around">
        {reviewers.map((reviewer, index) => (
          <Grid2 item key={index} xs={12} sm={6} md={4}> */}
      {/* xs, sm, md specify how many columns the item will take at different screen sizes */}
      {/* <Testimonial reviewer={reviewer} />
          </Grid2>
        ))}
      </Grid2> */}
      {/* <h3>My Publications</h3>
      <br/>
      <hr/>
      <div className={styles.container}>
        {papers.map((paper) => (
          <div key={paper.id} className={styles.card}>
            <div className={styles.content}>
              <h3>{paper.title}</h3>
              <p><strong>Abstract:</strong> {paper.abstract}</p>
              <p><strong>Conference:</strong> {paper.conference}</p>
              <p><strong>Year:</strong> {paper.year}</p>
              <p><strong>Citations:</strong> {paper.citations}</p>
              <div className={styles.cta}>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.underline}
                >
                  Read Paper
                </a>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

export async function getStaticProps() {
  const papers = getPapers();

  return {
    props: { title: "Papers", papers },
  };
}

export default PapersPage;
