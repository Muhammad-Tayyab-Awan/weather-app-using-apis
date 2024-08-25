import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
export default function InfoBox({ info }) {
  let Rain_Img = "https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f";
  let Hot_Img =
    "https://www.treehugger.com/thmb/9611hEAjKc9A2ixG5JRIzdv4GxU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__palm_trees_hot_sun-f8e20b86425b492f9d777d92db46db49.jpg";
  let Cold_Img =
    "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Sun2BFinland_by_Laurence2BNorah-1300x975.webp";
  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 85
                ? Rain_Img
                : info.temp > 15
                ? Hot_Img
                : Cold_Img
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature : {info.temp}&deg;C</p>
              <p>Humidity : {info.humidity}</p>
              <p>Minimum Temperature : {info.tempMin}&deg;C</p>
              <p>Maximum Temperature : {info.tempMax}&deg;C</p>
              <p>
                The Weather in <b>{info.city}</b> can be described as &nbsp;
                <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
