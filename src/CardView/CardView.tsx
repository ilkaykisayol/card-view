import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import RocketLaunch from "@mui/icons-material/RocketLaunch";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export interface CardViewProps {
  cardViewInfo: CardViewInfo;
  onCardClick: (arg:CardViewInfo) => void;
}

export interface CardViewInfo{
  title: string;
  description: string;
  owner: string;
  properties: string[];
  metrics: string[];
}

export function CardView ({
  cardViewInfo,
  onCardClick
}: React.PropsWithChildren<CardViewProps>) {
  const colors = [
    "#3380FF", // Matte Blue
    "#FF33FF", // Matte Pink
    "#FFC300", // Matte Yellow
    "#FF5733", // Matte Red-Orange
    "#33FFA8", // Matte Green
    "#8B33FF", // Matte Purple
    "#FF3333", // Matte Red
    "#33FF33", // Matte Lime
    "#3333FF", // Matte Indigo
    "#FF5733"  // Matte Orange
  ];
    return (
<Card style={{ marginTop: "10px" }}>
      <CardActionArea
        component="a"
        onClick={(e) => {
            onCardClick(cardViewInfo);
            e.preventDefault();
        }}
      >
        <CardContent>
          <div style={{ display: "flex", alignItems: "center" }}>
            <RocketLaunch
              sx={{
                color: "white",
                backgroundColor: "#8530cc",
                borderRadius: "25%",
                fontSize: "15px",
                display: "inline"
              }}
            />
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: "bold",
                paddingLeft: "5px",
                display: "inline"
              }}
            >
              {cardViewInfo.title}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              paddingTop: "15px",
              paddingBottom: "15px",
              alignItems: "center"
            }}
          >
            {
              cardViewInfo.properties?.map((p, i) => (
                <Typography
                  sx={{
                    fontSize: 14,
                    display: "inline-block",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    backgroundColor: colors[i],
                    fontWeight: "bold",
                    m: 1
                  }}
                >
                  {p}
                </Typography>
              ))}
          </div>
          <Typography sx={{ fontSize: 15, textAlign: "left" }}>
            {cardViewInfo.description}
          </Typography>
          <Typography
            sx={{ mt: 1.5, textAlign: "left" }}
            color="text.secondary"
          >
            {cardViewInfo.owner}
          </Typography>
          {cardViewInfo.metrics && (
            <List>
              {cardViewInfo.metrics.map((m) => (
                <ListItem>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <RocketLaunch
                      sx={{
                        color: "white",
                        backgroundColor: "#8530cc",
                        borderRadius: "25%",
                        fontSize: "15px"
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ style: { fontSize: "12px" } }}
                    primary={m}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
    );
}