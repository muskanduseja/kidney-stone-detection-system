import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';

export default function StruviteCard() {
  const [expanded, setExpanded] = React.useState(false);
  const shortText = "Uncover struvite kidney stones and their connection to infections.";
  const fullText = "Uncover struvite kidney stones and their connection to infections. Learn about their rapid growth, treatment strategies, prevention measures, and surgical interventions, ensuring an informed journey toward kidney health.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <Card sx={{ 
        height: "100%", 
        display: "flex", 
        flexDirection: "column",
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <CardActionArea sx={{ flexGrow: 1 }}>
          <motion.div whileTap={{ scale: 0.98 }}>
            <CardMedia
              component="img"
              height="180"
              image="/static/images/kidney-stone03.jpg"
              alt="Struvite Stones"
            />
          </motion.div>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h6" component="div">
              Struvite Stones
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {expanded ? fullText : shortText}
            </Typography>
            {!expanded && (
              <motion.div 
                style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
                whileHover={{ scale: 1.05 }}
              >
                <Button 
                  size="small" 
                  onClick={() => setExpanded(true)}
                  sx={{ color: '#00aaff', fontWeight: 'bold' }}
                >
                  READ MORE
                </Button>
              </motion.div>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
}