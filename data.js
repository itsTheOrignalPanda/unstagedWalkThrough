var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4337299731675692
      },
      "linkHotspots": [
        {
          "yaw": -1.5667046091591672,
          "pitch": 0.10786198638821176,
          "rotation": 5.497787143782138,
          "target": "1-2"
        },
        {
          "yaw": -0.5102033543540578,
          "pitch": 0.14465623475612333,
          "rotation": 0,
          "target": "2-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.00471959018462087,
          "pitch": -0.04091717618184987,
          "title": "Room<br>",
          "text": "<div>This is the example of an unstaged Room</div>"
        }
      ]
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.461954207124828,
          "pitch": 0.15365178899576293,
          "rotation": 0.7853981633974483,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3",
      "name": "3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1531980453781685,
          "pitch": 0.1612192907134311,
          "rotation": 0.7853981633974483,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
