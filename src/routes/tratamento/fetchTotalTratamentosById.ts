import tratamentoController from "../../controllers/tratamento/tratamentoController";
import { Router } from "express";
import loginRequired from "../../middleware/loginRequired";
import { nivelMedico } from "../../middleware/nivelMedico";
import nivelSecretaria from "@middlewares/nivelSecretaria";

const router = Router();

router.get("/total/:medicoId", loginRequired, nivelMedico, tratamentoController.fetchTotalTratamentoById);
router.get("/finalizados/:medicoId", loginRequired, nivelMedico, tratamentoController.fetchTratamentosFinalizadosById);
router.get("/cancelados/:medicoId", loginRequired, nivelMedico, tratamentoController.fetchTratamentosCanceladosById);
router.get("/emAndamento/:medicoId", loginRequired, nivelMedico, tratamentoController.fetchTratamentosEmAndamentoById);

export default router;
