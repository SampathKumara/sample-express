"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOffset = void 0;
const getOffset = (listPerPage, currentPage = 1) => (currentPage - 1) * listPerPage;
exports.getOffset = getOffset;
