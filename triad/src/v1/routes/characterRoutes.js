const express = require("express");
const router = express.Router();
const characterController = require("../controllers/characterController.js");
/**
 * @openapi
 * /api/v1/characters:
 *   get:
 *     summary: Get all characters
 *     tags:
 *       - Characters
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: string
 *         description: Load characters by page
 *       - in: query
 *         name: length
 *         schema:
 *           type: string
 *         description: Load number 'length' of characters
 *       - in: query
 *         name: isLike
 *         schema:
 *           type: boolean
 *         description: true / false
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Character"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 *   post:
 *     summary: Add a new CHARACTER
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Capitan Marvel
 *               description:
 *                 type: string
 *                 example: Dr. Bruce Banner lives a life etc...
 *               thumbnail:
 *                 type: object
 *                 properties:
 *                   path:
 *                     type: string
 *                     example: https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcapitan-marvel.png?alt=media&token=fb83366e-4902-4541-a732-2efbb55147e5
 *               humanName:
 *                     type: string
 *                     example: John Doe
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Character"
 *       '409':
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Character with the name Spider Man already exist."
 *       '5XX':
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

router.get("/", characterController.getAllCharacters);
router.get("/:characterId", characterController.getOneCharacter);

router.post("/", characterController.createNewCharacter);

router.patch("/:characterId", characterController.updateOneCharacter);

router.delete("/:characterId", characterController.deleteOneCharacter);

module.exports = router;
