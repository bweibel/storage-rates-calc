export const metersToMiles = function( meters ) {
    return meters * 0.000621371;
}

export const getTotalContainerCount = (countState) => {
    return Object.values(countState).reduce((acc, current) => acc + current, 0);
};


export const generateContainerInfo = (containers, counts) => {
    return containers.map(container => ({
      id: container.id,
      count: counts[container.id] || 0,
      cost: container.monthlyCost,
      offsiteCost: container.offsiteCost
    }));
  };
  
export const calculateTotalPrice = (containerInfo) => {
    return containerInfo.reduce((total, container) => {
      return total + (container.count * container.cost);
    }, 0);
};
  
export const calculateTotalOffsitePrice = (containerInfo) => {
  return containerInfo.reduce((total, container) => {
    return total + (container.count * container.offsiteCost);
  }, 0);
};

export const scrollToNext = (step) => {
  const timer = setTimeout(() => {
    const stepTwoHeading = document.getElementById("step-two");
    const estimateBox = document.getElementById("estimate-box");
    const addressBoxFinal = document.getElementById("address-final");

    switch ( step ) {
      case "steptwo":
        if (stepTwoHeading) {
          stepTwoHeading.scrollIntoView({ block: "start", behavior: "smooth" });
        }
        break;
      case "initialaddress":
        if (addressBoxFinal) {
          addressBoxFinal.scrollIntoView({ block: "start", behavior: "smooth" });
        } else {
          if (estimateBox) {
            estimateBox.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        }
        break;
      case "finaladdress":    
        if (estimateBox) {
          estimateBox.scrollIntoView({ block: "start", behavior: "smooth" });
        }
        break;
    }
  }, 500);
  
  return () => clearTimeout(timer);
}