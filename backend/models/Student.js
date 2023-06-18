const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({

  RollNumber: { 
    type: String,
    required: true,
    unique: true,
  },
  Fullname: {
    type: String,
    required: true,
  },
  DateOfBirth: {
    type: Date,
    required: true,
  },
  Gender: {
    type: Boolean,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  ChuyenNganh: {
    type: String,
    required: true,
  },
  IDCard: {
    type: String,
    required: true,
  },
  DateOfIssue: {
    type: Date,
    required: true,
  },
  PlaceOfIssue: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  HomePhone: {
    type: String,
    required: true,
  },
  MobilePhone: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  ParentName: {
    type: String,
    required: true,
  },
  ParentJob: {
    type: String,
    required: true,
  },
  PlaceOfWork: {
    type: String,
    required: true,
  },
  ParentPhone: {
    type: String,
    required: true,
  },
  ParentAddress: {
    type: String,
    required: true,
  },
  ParentEmail: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model("Students", studentSchema);
