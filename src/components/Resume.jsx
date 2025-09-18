import React from "react";
import { Card, Typography, Box, Link } from "@mui/material";
import { School as SchoolIcon, Work as WorkIcon } from "@mui/icons-material";

const formatDate = (date) => {
  if (!date) return "Present";
  return new Date(date).toLocaleString("default", {
    month: "short",
    year: "numeric",
  });
};

const getDuration = (start, end) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date(); // if null, take today

  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  if (years && remMonths) return `${years} yr ${remMonths} mo`;
  if (years) return `${years} yr${years > 1 ? "s" : ""}`;
  return `${remMonths} mo`;
};

const Resume = ({ education, experience }) => (
  <Card sx={{ p: 2, mb: 2 }}>
    <Typography variant="h4" gutterBottom color="primary">
      Education
    </Typography>
    {education.map((item, i) => (
      <Box key={i} mb={2}>
        <Box display="flex" alignItems="center" mb={1}>
          <SchoolIcon color="primary" sx={{ mr: 1 }} />
          {/* <Typography variant="h6">{item.college}</Typography> */}
          <Link
            href={item.link}
            target="_blank"
            underline="hover"
            variant="h6"
            color="text.primary"
          >
            {item.college}
          </Link>
        </Box>
        <Typography color="text.default">
          {item.stream} | {item.cgpa}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {item.period}
        </Typography>
        <Typography variant="body1">{item.description}</Typography>
      </Box>
    ))}

    <Typography variant="h4" gutterBottom color="primary" mt={3}>
      Experience
    </Typography>
    {experience.map((item, i) => (
      <Box key={i} mb={2}>
        <Box display="flex" alignItems="center" mb={1}>
          <WorkIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">{item.title}</Typography>
        </Box>
        <Link
          href={item.link}
          target="_blank"
          underline="hover"
          variant="h6"
          color="text.primary"
        >
          {item.company}
        </Link>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {formatDate(item.start)} — {formatDate(item.end)} ·{" "}
          {getDuration(item.start, item.end)}
        </Typography>
      </Box>
    ))}
  </Card>
);

export default Resume;
