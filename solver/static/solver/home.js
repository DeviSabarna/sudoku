var hot;
function myFunction() {
  console.log(hot.getData());
}
$("#save_conf").click(function() {
data =JSON.stringify(hot.getData());
console.log(hot.getColWidth(0));
$.ajax({
  type: "POST",
  url: '/send_data/',
  data: {
      "data": data,
  },
  dataType: "json",
  success: function (data) {
      // any process in data
     $('#answer').html(data);
  },
  failure: function () {
      alert("failure");
  }
});

});
var container = document.getElementById('table');
 hot = new Handsontable(container, {
  minRows:9,
  minCols:9,
  filters: true,
  customBorders: [
    {
      /* Rows[0:2] and columns [0:2] */
      range: {
        from: {
          row: 0,
          col: 0
        },
        to: {
          row: 2,
          col: 2
        }
      },
      top: {
        width: 2,
        color: 'red'
      },
      left: {
        width: 2,
        color: 'orange'
      },
      bottom: {
        width: 2,
        color: 'red'
      },
      right: {
        width: 2,
        color: 'orange'
      }
    },
        /* Rows[0:2] and columns [3:5] */
{
  range: {
    from: {
      row: 0,
      col: 3
    },
    to: {
      row: 2,
      col: 5
    }
  },
  top: {
    width: 2,
    color: 'red'
  },
  left: {
    width: 2,
    color: 'orange'
  },
  bottom: {
    width: 2,
    color: 'red'
  },
  right: {
    width: 2,
    color: 'orange'
  }

},

  /* Rows[0:2] and columns [6:8] */
{
  range: {
    from: {
      row: 0,
      col: 6
    },
    to: {
      row: 2,
      col: 8
    }
  },
  top: {
    width: 2,
    color: 'red'
  },
  left: {
    width: 2,
    color: 'orange'
  },
  bottom: {
    width: 2,
    color: 'red'
  },
  right: {
    width: 2,
    color: 'orange'
  }
},
/* Rows[3:5] and columns [0:2] */
{
range: {
  from: {
    row: 3,
    col: 0
  },
  to: {
    row: 5,
    col: 2
  }
},
top: {
  width: 2,
  color: 'red'
},
left: {
  width: 2,
  color: 'orange'
},
bottom: {
  width: 2,
  color: 'red'
},
right: {
  width: 2,
  color: 'orange'
}
},
/* Rows[3:5] and columns [3:5] */
{
  range: {
    from: {
      row: 3,
      col: 3
    },
    to: {
      row: 5,
      col: 5
    }
  },
  top: {
    width: 2,
    color: 'red'
  },
  left: {
    width: 2,
    color: 'orange'
  },
  bottom: {
    width: 2,
    color: 'red'
  },
  right: {
    width: 2,
    color: 'orange'
  }
},
  /* Rows[3:5] and columns [6:8] */
  {
    range: {
      from: {
        row: 3,
        col: 6
      },
      to: {
        row: 5,
        col: 8
      }
    },
    top: {
      width: 2,
      color: 'red'
    },
    left: {
      width: 2,
      color: 'orange'
    },
    bottom: {
      width: 2,
      color: 'red'
    },
    right: {
      width: 2,
      color: 'orange'
    }
  },
     /* Rows[6:8] and columns [0:2] */
     {
      range: {
        from: {
          row: 6,
          col: 0
        },
        to: {
          row: 8,
          col: 2
        }
      },
      top: {
        width: 2,
        color: 'red'
      },
      left: {
        width: 2,
        color: 'orange'
      },
      bottom: {
        width: 2,
        color: 'red'
      },
      right: {
        width: 2,
        color: 'orange'
      }
    },
       /* Rows[6:8] and columns [3:5] */
    {
      range: {
        from: {
          row: 6,
          col: 3
        },
        to: {
          row: 8,
          col: 5
        }
      },
      top: {
        width: 2,
        color: 'red'
      },
      left: {
        width: 2,
        color: 'orange'
      },
      bottom: {
        width: 2,
        color: 'red'
      },
      right: {
        width: 2,
        color: 'orange'
      }
    },
       /* Rows[6:8] and columns [6:8] */
     {
      range: {
        from: {
          row: 6,
          col: 6
        },
        to: {
          row: 8,
          col: 8
        }
      },
      top: {
        width: 2,
        color: 'red'
      },
      left: {
        width: 2,
        color: 'orange'
      },
      bottom: {
        width: 2,
        color: 'red'
      },
      right: {
        width: 2,
        color: 'orange'
      },
}],
  licenseKey:'non-commercial-and-evaluation'
});