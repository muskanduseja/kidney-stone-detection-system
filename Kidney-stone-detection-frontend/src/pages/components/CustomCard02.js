import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';

export default function UricAcidCard() {
  const [expanded, setExpanded] = React.useState(false);
  const shortText = "Learn about uric acid stones and how diet and hydration affect them.";
  const fullText = "Learn about uric acid stones and how diet and hydration affect them. Explore practical tips, dietary modifications, and medications to control uric acid levels. Empower yourself with knowledge for effective prevention and management.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
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
              image="/static/images/kidney-stone02.jpg"
              alt="Uric Acid Stones"
            />
          </motion.div>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h6" component="div">
              Uric Acid Stones
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