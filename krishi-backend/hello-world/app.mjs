const resources = [
  {
    id: 1,
    category: "scheme",
    title: "PM-KISAN",
    description: "Income support scheme for eligible farmer families.",
    source: "Government of India",
    link: "https://pmkisan.gov.in/"
  },
  {
    id: 2,
    category: "scheme",
    title: "Pradhan Mantri Fasal Bima Yojana",
    description: "Crop insurance support against eligible agricultural risks.",
    source: "Government of India",
    link: "https://pmfby.gov.in/"
  },
  {
    id: 3,
    category: "storage",
    title: "Agriculture Infrastructure Fund",
    description: "Financing support for eligible agricultural infrastructure projects.",
    source: "Government of India",
    link: "https://agriinfra.dac.gov.in/"
  },
  {
    id: 4,
    category: "storage",
    title: "Central Warehousing Corporation",
    description: "Explore information about warehousing and storage services.",
    source: "Government resource",
    link: "https://cewacor.nic.in/"
  }
];

const cropGuidance = [
  {
    id: 101,
    crop: "bajra",
    keywords: ["yellow", "yellowing", "leaves"],
    title: "Yellowing of Bajra Leaves",
    guidance:
      "Yellow leaves can have several causes, including nutrient deficiency, water stress, or crop-health problems. The pattern and age of affected leaves can help identify the possible cause.",
    possibleCauses: [
      "Nutrient deficiency",
      "Irregular watering or water stress",
      "Root-related or other crop-health issues"
    ],
    steps: [
      "Check whether the soil is too dry or waterlogged.",
      "Observe whether older or newer leaves are affected.",
      "Inspect the underside of leaves for pests.",
      "Consult a local agriculture expert before applying treatment."
    ],
    warning:
      "This is preliminary guidance, not a confirmed diagnosis. Avoid applying chemicals without expert advice.",
    source: "General preliminary guidance",
    link: "https://agriwelfare.gov.in/"
  },

  {
    id: 102,
    crop: "bajra",
    keywords: ["insect", "insects", "pest", "pests"],
    title: "Possible Insect Damage in Bajra",
    guidance:
      "Insect-related damage may appear as holes, chewed leaf edges, discoloration, or insects on the plant. Identifying the insect correctly is important before selecting a treatment.",
    possibleCauses: [
      "Leaf-feeding insects",
      "Sap-sucking pests",
      "Other pest-related damage"
    ],
    steps: [
      "Inspect both sides of the leaves.",
      "Look for insects, eggs, or unusual marks.",
      "Check whether damage is spreading to new leaves.",
      "Take a clear photograph and consult an agriculture expert."
    ],
    warning:
      "Do not spray pesticides without identifying the pest and confirming the appropriate product and dosage.",
    source: "General preliminary guidance",
    link: "https://agriwelfare.gov.in/"
  },

  {
    id: 103,
    crop: "bajra",
    keywords: ["wilt", "wilting", "drooping"],
    title: "Wilting in Bajra Plants",
    guidance:
      "Wilting may be related to insufficient soil moisture, root damage, heat stress, or disease. The soil condition and distribution of affected plants should be checked first.",
    possibleCauses: [
      "Insufficient soil moisture",
      "Excess water or poor drainage",
      "Root damage or possible disease",
      "Heat-related stress"
    ],
    steps: [
      "Check soil moisture near the affected plants.",
      "Inspect whether the field has proper drainage.",
      "Compare healthy and affected plants.",
      "Consult a local agriculture expert if wilting continues."
    ],
    warning:
      "Avoid excessive irrigation or chemical treatment until the cause of wilting is identified.",
    source: "General preliminary guidance",
    link: "https://agriwelfare.gov.in/"
  }
];

export const lambdaHandler = async (event) => {
  const path = event.path || "/resources";
  const queryParameters = event.queryStringParameters || {};

  const search = (queryParameters.search || "").toLowerCase();
  const crop = (queryParameters.crop || "").toLowerCase();
  const problem = (queryParameters.problem || "").toLowerCase();

  let result = [];

  if (path.includes("schemes")) {
    result = resources.filter(
      (item) => item.category === "scheme"
    );
  } else if (path.includes("storage")) {
    result = resources.filter(
      (item) => item.category === "storage"
    );
  } else if (path.includes("crop-guidance")) {
    result = cropGuidance.filter((item) => {
      const cropMatches =
        !crop || item.crop.includes(crop);

      const problemMatches =
        !problem ||
        item.keywords.some((keyword) =>
          problem.includes(keyword)
        );

      return cropMatches && problemMatches;
    });
  } else {
    result = resources;
  }

  if (search) {
    result = result.filter((item) =>
      `${item.title} ${item.description || ""} ${
        item.guidance || ""
      }`
        .toLowerCase()
        .includes(search)
    );
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      success: true,
      count: result.length,
      data: result
    })
  };
};
